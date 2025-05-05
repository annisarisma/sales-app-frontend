// mockApi.ts
import axios from 'axios'

const api = axios.create({
  baseURL:
    import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL || 'http://localhost:3000', // This won't be used but gives a sense of structure
})

api.interceptors.request.use(function (config) {
  config.headers['Access-Control-Allow-Origin'] =
    'https://node-api.pixeleyez.com'
  config.baseURL = 'https://node-api.pixeleyez.com'
  config.headers['Content-Type'] = 'application/json'
  return config
})

// Mock GET request -- get data
api.get = async (url) => {
  // Assuming url contains the endpoint to fetch data from the API
  try {
    url = 'https://node-api.pixeleyez.com' + url
    const response = await axios.get(url) // Make a real GET request to fetch the data
    return response.data
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || 'Internal Server Error!'
    throw new Error(errorMessage)
  }
}

api.post = async (api, newRecord, field) => {
  const isApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'
  let data = []

  if (isApi) {
    try {
      const response = await axios.post(
        api,
        { ...newRecord, _id: newRecord.id },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (response.status === 200 || response.status === 201) {
        return response.data
      } else {
        throw new Error(response.data?.message || 'Failed to add new record!')
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Internal Server Error!'
      throw new Error(errorMessage)
    }
  } else {
    data.push(newRecord)
    return Promise.resolve({
      data: newRecord,
      message: `${field} record added successfully`,
    })
  }
}

api.put = async (api, updatedRecord, field) => {
  const isApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

  if (isApi) {
    try {
      // Include the ID of the record in the URL
      const response = await axios.put(
        `${api}/${updatedRecord.id}`,
        updatedRecord,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (response.status === 200 || response.status === 201) {
        return response.data
      } else {
        throw new Error(response.data?.message || 'Failed to update record!')
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Internal Server Error!'
      throw new Error(errorMessage)
    }
  } else {
    // Simulate update locally when API is inactive
    return Promise.resolve({
      data: updatedRecord,
      message: `${field} update successfully`,
    })
  }
}

api.delete = async (api, id, field) => {
  const isApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

  if (isApi) {
    try {
      // Pass the id as part of the URL
      const response = await axios.delete(`${api}/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      // Check if the delete was successful
      if (response.status === 200) {
        return response.data // Return the API response data
      } else {
        throw new Error(response.data?.message || 'Failed to delete record!')
      }
    } catch (error) {
      // Log and rethrow the error
      const errorMessage =
        error.response?.data?.message || 'Internal Server Error!'
      throw new Error(errorMessage)
    }
  } else {
    // Simulate delete when the API is inactive
    return Promise.resolve({
      data: id,
      message: `${field} delete successful.`,
    })
  }
}

export default api
