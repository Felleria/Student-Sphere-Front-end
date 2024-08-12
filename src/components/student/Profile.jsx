import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/student/profile')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProfile(data);
      })
      .catch(error => {
        setError(error);
        console.error('Error fetching profile:', error);
      });
  }, []);

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Student Profile</h1>
      {error && <p className="text-red-500 text-center mb-4">Error: {error.message}</p>}
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Attribute</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Details</th>
          </tr>
        </thead>
        <tbody>
          {profile ? (
            <>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Profile Image</td>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={profile.profile_image}
                    alt="Profile"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">First Name</td>
                <td className="border border-gray-300 px-4 py-2">{profile.first_name}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Last Name</td>
                <td className="border border-gray-300 px-4 py-2">{profile.last_name}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Date of Birth</td>
                <td className="border border-gray-300 px-4 py-2">{profile.date_of_birth}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Phone Number</td>
                <td className="border border-gray-300 px-4 py-2">{profile.phone_number}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Email</td>
                <td className="border border-gray-300 px-4 py-2">{profile.email}</td>
              </tr>
            </>
          ) : (
            !error && (
              <tr>
                <td colSpan="2" className="border border-gray-300 px-4 py-2 text-center">Loading profile...</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
