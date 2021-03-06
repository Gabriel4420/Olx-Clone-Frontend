import Cookies from 'js-cookie'
import qs from 'qs'

const BASEAPI = 'http://alunos.b7web.com.br:501'

const apiFetchFile = async (endpoint, body) => {
  if (!body.token) {
    let token = Cookies.get('token')
    if (token) {
      body.append('token', token)
    }
  }

  const res = await fetch(BASEAPI + endpoint, {
    method: 'POST',
    body,
  })
  const json = await res.json()

  if (json.notallowed) {
    window.location.href = '/signin'
    return
  }

  return json
}

const apiFetchPost = async (endpoint, body) => {
  if (!body.token) {
    let token = Cookies.get('token')
    if (token) {
      body.token = token
    }
  }

  const res = await fetch(BASEAPI + endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const json = await res.json()

  if (json.notallowed) {
    window.location.href = '/signin'
    return
  }

  return json
}

const apiFetchGet = async (endpoint, body = []) => {
  if (!body.token) {
    let token = Cookies.get('token')
    if (token) {
      body.token = token
    }
  }

  const res = await fetch(`${BASEAPI + endpoint}?${qs.stringify(body)}`)
  const json = await res.json()

  if (json.notallowed) {
    window.location.href = '/signin'
    return
  }

  return json
}

const api = {
  login: async (email, password) => {
    //Todo: Fazer consulta ao webservice
    const json = await apiFetchPost('/user/signin', { email, password })
    return json
  },

  register: async (name, email, password, stateLoc) => {
    const json = await apiFetchPost('/user/signup', {
      name,
      email,
      password,
      state: stateLoc,
    })
    return json
  },

  getStates: async () => {
    const json = await apiFetchGet('/states')
    return json.states
  },
  getCategories: async () => {
    const json = await apiFetchGet('/categories')
    return json.categories
  },

  getAds: async (options) => {
    const json = await apiFetchGet('/ad/list?sort=asc', options)
    return json
  },
  getAd: async (id, othersAds = false) => {
    const json = await apiFetchGet('/ad/item', {
      id,
      othersAds,
    })

    return json
  },
  addAd: async (fdata) => {
    const json = await apiFetchFile('/ad/add', fdata)
    return json
  },
}

export default () => api
