import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHub = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Deepanshu1026'); // Replace 'your-username' with the GitHub username
        setProfile(response.data);
      } catch (err) {
        setError('Failed to fetch profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!profile) return <p>No profile data</p>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg flex p-6 design-on-phone">
        {/* Profile Image */}
        <div className="w-1/3 flex justify-center items-center img-parent">
          <img
            src={profile.avatar_url}
            alt={profile.name}
            className="w-48 h-48 object-cover rounded-full"
          />
        </div>

        {/* Profile Details */}
        <div className="w-2/3 pl-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{profile.name}</h1>
          <p className="text-xl text-gray-600 mb-4">@{profile.login}</p>
          <p className="text-gray-700 mb-4">{profile.bio}</p>
          <p className="text-gray-700 mb-4">
            <strong>Location:</strong> {profile.location || 'N/A'}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Public Repositories:</strong> {profile.public_repos}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Followers:</strong> {profile.followers}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Following:</strong> {profile.following}
          </p>
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitHub;
