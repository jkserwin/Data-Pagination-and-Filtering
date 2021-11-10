/*
Treehouse Techdegree: Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab
   Reach out in your Slack community if you have questions
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const studentList = document.querySelector('.student-list')

function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   studentList.innerHTML = '';
   for ( let i = 0; i < list.length; i++ ) {
      if (i >= startIndex && i < endIndex) {
         let li = document.createElement('LI');
         li.classList.add("student-item");
         li.classList.add("cf");
         li.innerHTML = `
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${list[i].registered.date}</span>
               </div>`;
         studentList.insertAdjacentElement("beforeend", li); 
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   let btnNum = Math.ceil(list.length / 9);
   let linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   for (let i = 1; i <= btnNum; i++) {
      let li = document.createElement('LI');
      li.innerHTML = `
         <button type="button">${i}</button>
      `;
      linkList.insertAdjacentElement("beforeend", li);      
   }
   linkList.firstChild.classList.add('active');
   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON'){
         linkList.children.classList.remove('active');
         e.target.classList.add('active');
         showPage(data, e.target.textContent);
      }
   })
}

// Call functions

showPage(data, 1);
addPagination(data);