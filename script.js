import { snippets } from "./modules/Snippets.js"


const container = document.querySelector('.container')
const modal = document.querySelector('.modal')
const modalOpen = document.querySelector('#modalOpen')
const closeModal = document.querySelector('.closeModal')


const createGrid = () => {
  snippets.forEach( (snippet) => {
    const button = document.createElement('button');
    button.textContent = `${snippet.name}`;
    button.id = snippet.id;
    container.append(button);
    button.addEventListener('click', () => {
      modalOpen.textContent = `${snippet.kode}`
      modal.showModal()
      console.log("test");
    })

  } );
}

createGrid()


closeModal.addEventListener('click', () => {
  modal.close()
})

document.addEventListener('DOMContentLoaded', () => {
  hljs.highlightAll();

  const copyButton = document.querySelector('.copy');
  const copySuccess = document.querySelector('.copy-success');

  const copyTextHandler = () => {
    const text = modalOpen.innerText;

 
    navigator.clipboard.writeText(text).then(
      () => {
        copySuccess.classList.add('show-message');
        setTimeout(() => {
          copySuccess.classList.remove('show-message');
        }, 2500);
      },
      () => {
        console.log('Error writing to the clipboard');
      }
    );
  };

  copyButton.addEventListener('click', copyTextHandler);
});
