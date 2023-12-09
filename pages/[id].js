// pages/[id].js

import { db } from './firebaseConfig';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
};

export default UserProfile;

export async function getStaticPaths() {
  const querySnapshot = await getDocs(collection(db, 'users'));
  const paths = [];
  querySnapshot.forEach((doc) => {
    paths.push({ params: { id: doc.id } });
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const userDocRef = doc(db, 'users', params.id);
  const userDocSnapshot = await getDoc(userDocRef);
  const user = { id: userDocSnapshot.id, ...userDocSnapshot.data() };
  return { props: { user } };
}
