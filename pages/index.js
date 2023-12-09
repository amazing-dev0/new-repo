// pages/index.js

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, 'users'));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

const Home = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setUserData(data);
    }
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-5xl font-bold'>Fetch Data from Firebase DB</h1>
      <div>
        {userData.map((user) => (
          <div key={user.id} className='mb-4'>
            <Link href="/[id]" as={`/${user.id}`}>
              <p> {user.name}</p>
            </Link>
            <p>{user.age}</p>
            <p>{user.bio}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
