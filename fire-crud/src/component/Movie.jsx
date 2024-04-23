import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc
} from "firebase/firestore";
import { auth, db } from "../config/firebase";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const moviesCollection = collection(db, "movies"); // Replace 'movies' with your collection name

  //   sates for add the data
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

//   update 
  const[newtitle,setnewtitle]=useState("")
 
  const handleAddData = async () => {
    try {
      await addDoc(moviesCollection, {
        title,
        drama: genre,
        director,
        year,
         userId: auth?.currentUser?.uid,
      }).then((res) => {
        alert("Data added to firebase");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMovie=async(id)=>{
 try {
    const moviedoc=doc(db,"movies",id)
    await deleteDoc(moviedoc).then((res)=>{
        alert("deleted succesgilly")
    })
 } catch (error) {
    console.log(error);
 }
  }

  const UpdateMovie=async(id)=>{
    try {
       const moviedoc=doc(db,"movies",id)
       await updateDoc(moviedoc,{title:newtitle}).then((res)=>{
           alert("update succesgilly")
       })
    } catch (error) {
       console.log(error);
    }
     }

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const moviesSnapshot = await getDocs(moviesCollection);
        let data = moviesSnapshot.docs.map((el) => ({
          ...el.data(),
          id: el.id,
        }));

        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieList();
  }, [movies]);
  return (
    <div>
      <img src={auth?.currentUser?.photoURL} alt="figma" />
      <h1>Movies data</h1>
      {/* Add data into data base  */}
      <div>
        <h1>Movie Information</h1>
        <p>
          <strong>Director:</strong>
          <input
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </p>
        <p>
          <strong>Genre:</strong>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </p>
        <p>
          <strong>Title:</strong>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          <strong>Year:</strong>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </p>
        <button onClick={handleAddData}>AddMoviesToFareBase</button>
      </div>

      {/* End */}

      {movies.map((el) => (
        <div style={{ border: "1px solid teal" }} key={el.id}>
          <h2>{el.title}</h2>
          <p>{el.drama}</p>
          <p>{el.director}</p>
          <p>{el.year}</p>
          <input type="text" name="" id=""  onChange={(e)=>setnewtitle(e.target.value)} />
          <button onClick={()=>deleteMovie(el.id)}>Delete</button>
          <button onClick={()=>UpdateMovie(el.id)}>Update</button>
        </div>
      ))}
    </div>
  );
};

export default Movie;
