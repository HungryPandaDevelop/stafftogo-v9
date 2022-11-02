import { db } from 'firebase.config';
import {
  getAuth,
  deleteUser,
} from 'firebase/auth';

import {
  doc,
  deleteDoc,
  collection,
  query,
  where,
  orderBy,
  getDocs

} from 'firebase/firestore';


const DeleteBtnAccount = () => {

  const deleteAccount = () => {
    if (window.confirm('Delete ?')) {
      const auth = getAuth();

      if (auth) {

        const user = auth.currentUser;

        deleteDoc(doc(db, 'users', user.uid)).then(() => {
          deleteUser(user);

          const collArr = ['resume', 'vacancies'];

          collArr.forEach(async (i) => {
            const listingsRef = collection(db, i);

            const q = query(
              listingsRef,
              where('userRef', '==', user.uid),
              orderBy('timestamp', 'desc'),
            );

            const curDoc = await getDocs(q)

            curDoc.forEach(item => {
              deleteDoc(item.ref)
            })
          })
        })
      }
    }

  }


  return (
    <>
      <div
        className="btn btn-delete-profiled btn--red ico-in ico-in--left"
        onClick={deleteAccount}
      >
        <i></i><span>Удалить профиль</span>
      </div>
    </>
  )
}

export default DeleteBtnAccount
