import React, { useState, useEffect } from 'react';

function NewPost(props) {

  // Define state variables to store form input values
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [endDate, setEndDate] = useState('')
  const [positions, setPositions] = useState('')
  const [type, setType] = useState('')
  const [submitSuccessMessage, setSubmitSuccessMessage] = useState("")
  const [userId, setUserId] = useState('')

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    let formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('location', location)
    formData.append('endDate', endDate)
    formData.append('positions', positions)
    formData.append('type', type)
    formData.append('user', userId)

    fetch('https://w20016240.nuwebspace.co.uk/groupwork/testapi/newpost',
      {
        method: 'POST',
        body: formData,
      }
    )

      .then(res => {
        if ((res.status === 200) || (res.status === 204)) {
          setSubmitSuccessMessage("New post created successfully!")
        } else {
          throw new Error("Error: " + res.status)
        }
      })

      .catch(error => {
        console.error("New Post Error:", error)
        setSubmitSuccessMessage("Error creating new post.")
      })

    // Reset the form fields after submission
    setTitle('')
    setDescription('')
    setLocation('')
    setEndDate('')
    setPositions('')
    setType('')
  }

  useEffect(() => {
    if (props.signedIn) {
      const token = localStorage.getItem('jwt')
      if (token) {
        const tokenParts = token.split('.')
        const decodedPayload = JSON.parse(atob(tokenParts[1]))
        setUserId(decodedPayload.sub)
      }
    }
  }, [props.signedIn]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">New Post</h1>
      {props.signedIn ? (
        <div className="border rounded-md p-6 shadow-md bg-green-900">
          <form onSubmit={handleSubmit} className="mt-8 mx-auto max-w-md">
            <div className="mb-4">
              <label htmlFor="title" className="block text-white">Project Name:</label>
              <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-input mt-1 block w-full border rounded-md px-4 py-2" required />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-white">Description:</label>
              <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-textarea mt-1 block w-full border rounded-md px-4 py-2" required />
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-white">Location:</label>
              <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="form-input mt-1 block w-full border rounded-md px-4 py-2" required />
            </div>
            <div className="mb-4">
              <label htmlFor="endDate" className="block text-white">End Date:</label>
              <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="form-input mt-1 block w-full border rounded-md px-4 py-2" required />
            </div>
            <div className="mb-4">
              <label htmlFor="positions" className="block text-white">Number of Positions:</label>
              <input type="number" id="positions" value={positions} onChange={(e) => setPositions(e.target.value)} className="form-input mt-1 block w-full border rounded-md px-4 py-2" required />
            </div>
            <div className="mb-4">
              <label htmlFor="type" className="block text-white">Project Type:</label>
              <select id="type" value={type} onChange={(e) => setType(e.target.value)} className="form-select mt-1 block w-full border rounded-md px-4 py-2" required>
                <option value="">Select Project Type</option>
                <option value="Private Garden">Private Garden</option>
                <option value="Garden Centre">Garden Centre</option>
                <option value="Community Garden">Community Garden</option>
              </select>
            </div>
            <button type="submit" className="bg-green-500 text-black py-2 px-4 rounded hover:bg-green-600">Submit</button>
          </form>
          {submitSuccessMessage && <p className="text-white text-center mx-auto">{submitSuccessMessage}</p>}
        </div>
      ) : (
        <div className="mx-auto max-w-md">
      <div className="border rounded-md p-6 shadow-md bg-gray-200">
        <div className="text-black text-center">
          <p>Please login to view this page.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            <a href="/login">Login Page</a>
          </button>
        </div>
      </div>
    </div>
      )}
    </div>
  );
}

export default NewPost;