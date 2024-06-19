import { loadProducts } from './productCard.js'
import { handleFormSubmit } from './formHandler.js'

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("[data-form]")
  const productList = document.querySelector("[data-ul]")
  const modal = document.getElementById("modal")
  const addProductButton = document.querySelector(".products__btn-add")
  const closeButton = document.querySelector(".close")

  // Función para mostrar el modal
  function showModal() {
    modal.style.display = "block"
  }

  // Función para ocultar el modal
  function closeModal() {
    modal.style.display = "none"
  }

  // Event listener para mostrar y cerrar el modal
  addProductButton.addEventListener("click", showModal)

  closeButton.addEventListener("click", closeModal)

  // Cerrar el modal si el usuario hace clic fuera de él
  window.addEventListener("click", (event) => {
    if (event.target == modal){
      closeModal()
    }
  })

  // Cargar productos al inicio
  loadProducts(productList)

  // Manejar el envío del formulario
  handleFormSubmit(form, productList, modal)
})
