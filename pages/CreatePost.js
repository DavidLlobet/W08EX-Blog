// import Head from "next/head";
// import styles from "./index.module.css";
// import Link from "next/link";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useEffect, useState } from "react";
// import { Router } from "next/dist/client/router";

// const CreatePost = () => {
//   //   const initialData = {
//   //   title: "",
//   //   content: "",
//   // };

//   // const [loginUserData, setUserData] = useState(initialData);
//   // const [isDisabled, setIsDisabled] = useState(true);

//   const onSubmit = async (event) => {
//     event.preventDefault();
// await axios.post
// router.push("/");

//   // const changeUserData = (event) => {
//   //   setUserData({
//   //     ...loginUserData,
//   //     [event.target.id]: event.target.value,
//   //   });
//   // };

//   // useEffect(() => {
//   //   setIsDisabled(
//   //     loginUserData.title === "" || loginUserData.content === ""
//   //   );
//   // }, [loginUserData]);

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <header className="d-flex justify-content-center py-3">
//         {/* <Link className="nav-link">POKEMON</Link> */}
//         <Link className="nav-link" href="/">
//           HOME/
//         </Link>
//         <Link className="nav-link" href="/PostsList">
//           POSTS LIST/
//         </Link>
//         <Link className="nav-link" href="/CreatePost">
//           CREATE POST
//         </Link>
//       </header>
//       <main>
//         <h1 className={styles.title}>Create post</h1>
//         <form noValidate autoComplete="off">
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             id="title"
//             placeholder="Title"
//             name="title"
//             className="form-control"
//             required
//             onChange={changeUserData}
//             value={loginUserData.title}
//           ></input>
//           <label htmlFor="content">Content</label>
//           <input
//             type="text"
//             id="content"
//             placeholder="Content"
//             name="content"
//             className="form-control"
//             required
//             onChange={changeUserData}
//             value={loginUserData.content}
//           ></input>
//           <button
//             type="submit"
//             className={
//               isDisabled
//                 ? "loginform_submit_disabled"
//                 : "loginform_submit_active"
//             }
//             disabled={isDisabled}
//             onClick={onSubmit}
//           >
//             Create
//           </button>
//         </form>
//       </main>
//     </div>
//   );
// };

// export default CreatePost;
