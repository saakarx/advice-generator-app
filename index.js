const API_URL = 'https://api.adviceslip.com/advice'

const adviceId = document.getElementById('advice-id')
const adviceText = document.getElementById('advice-text')
const adviceGeneratorBtn = document.getElementById('advice-generator')
const adviceLoaders = document.querySelectorAll('[data-advice]')

const adviceIdLoaderHTML = `<span data-advice="loader" class="w-8 h-4 block bg-green-neon rounded-sm animate-pulse" ></span>`
const adviceTextLoaderHTML = `<span data-advice="loader" class="w-3/4 h-9 rounded-md bg-cyan-light block animate-pulse" ></span> <span data-advice="loader" class="w-11/12 h-9 rounded-md bg-cyan-light block animate-pulse" ></span> <span data-advice="loader" class="w-8/12 h-9 rounded-md bg-cyan-light block animate-pulse" ></span`

let isLoading = true

const updateData = ({ id, advice }) => {
  adviceId.innerHTML = id
  adviceText.innerHTML = isLoading ? `${advice}` : `"${advice}"`
}

const updateLoading = loaders => {
  if (isLoading) {
    loaders.forEach(loader => loader.classList.replace('hidden', 'block'))
    return
  }
  loaders.forEach(loader => loader.classList.replace('block', 'hidden'))
}

const fetchData = async URL => {
  try {
    const data = await fetch(URL)
    const res = await data.json()
    isLoading = false
    updateLoading(adviceLoaders)
    updateData(res.slip)
  } catch (err) {
    console.error(err.message)
  }
}

const generateAdvice = () => {
  isLoading = true
  updateLoading(adviceLoaders)
  updateData({ id: adviceIdLoaderHTML, advice: adviceTextLoaderHTML })
  fetchData(API_URL)
}

adviceGeneratorBtn.addEventListener('click', generateAdvice)

fetchData(API_URL)
