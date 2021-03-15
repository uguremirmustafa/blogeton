import React, { useEffect, useState } from 'react';
import SkeletonProfile from '../Skeletons/SkeletonProfile';

function Users() {
  const [profile, setProfile] = useState('');
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await res.json();
      setProfile(data);
    }, 5000);
  }, []);
  return (
    <div>
      <h2>users</h2>
      {profile && (
        <div>
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}
      {!profile && <SkeletonProfile theme="dark" />}
    </div>
  );
}

export default Users;
