class Regis {
	constructor(id, nama, hp, kp) {
		this.id = id;
		this.nama = nama;
		this.hp = hp;
		this.kp = kp;
	}
}


// UI
class UI {
	static displayCourses() {

		const registrasi = Store.getCourses();
		registrasi.forEach((regis) => UI.addCourseToList(regis));

	}
	static addCourseToList(regis) {
		const list = document.querySelector('#regis-list');

		const row = document.createElement('tr');


		row.innerHTML = `
            <td>${regis.id}</td>
            <td>${regis.nama}</td>
            <td>${regis.hp}</td>
            <td>${regis.kp}</td>
			<td><a href="#" class="btn btn-primary btn-sm delete">Delete</a> <a href="#" class="btn btn-info btn-sm update_tombol">Edit</a></td>
        `;

		list.appendChild(row);
	}

	static clearFields() {
		document.querySelector('#id').value = '';
		document.querySelector('#nama').value = '';
		document.querySelector('#hp').value = '';
		document.querySelector('#kp').value = '';

	}

	static deleteCourse(el) {
		if (el.classList.contains('delete')) {
			el.parentElement.parentElement.remove();
		}
	}

	static showAlert(message, className) {
		const div = document.createElement('div');
		div.className = `alert alert-${className}`;
		div.appendChild(document.createTextNode(message));
		const container = document.querySelector('.container');
		const form = document.querySelector('#regis-form');

		container.insertBefore(div, form);

		// remove alert in 3 seconds
		setTimeout(() => document.querySelector('.alert').remove(), 2000);
	}
}

// stored Regis
class Store {
	static getCourses() {
		let registrasi;
		if (localStorage.getItem('registrasi') === null) {
			registrasi = [];
		} else {
			registrasi = JSON.parse(localStorage.getItem('registrasi'));
		}
		return registrasi;
	}
	static addCourse(regis) {
		const registrasi = Store.getCourses();
		registrasi.push(regis);
		localStorage.setItem('registrasi', JSON.stringify(registrasi));
	}
	static removeCourse(kp) {
		const registrasi = Store.getCourses();

		registrasi.forEach((regis, index) => {
			if (regis.kp === kp) {
				registrasi.splice(index, 1);
			}
		});

		localStorage.setItem('registrasi', JSON.stringify(registrasi));

	}
}

// show registrasi
document.addEventListener('DOMContentLoaded', UI.displayCourses);

document.querySelector('#regis-form').addEventListener('submit', (e) => {
	// get form values
	e.preventDefault();
	const id = document.querySelector('#id').value;
	const nama = document.querySelector('#nama').value;
	const hp = document.querySelector('#hp').value;
	const kp = document.querySelector('#kp').value;

	// validate
	if (id === '' || nama === '' || hp === '' || kp == '') {
		UI.showAlert('Isi semua Field', 'danger');
	} else {
		// instatiate regis
		const regis = new Regis(id, nama, hp, kp);

		// add regis
		UI.addCourseToList(regis);

		// add regis to store
		Store.addCourse(regis);

		// show success message
		UI.showAlert('Berhasil ditambahkan', 'success');

		// clear fields
		UI.clearFields();
	}

});

// delete regis
document.querySelector('#regis-list').addEventListener('click', (e) => {
	// remove regis from UI
	UI.deleteCourse(e.target)

	// remove regis from store
	Store.removeCourse(e.target.parentElement.previousElementSibling.textContent);

	// show success message
	UI.showAlert('Berhasil dihapus', 'success');
});
