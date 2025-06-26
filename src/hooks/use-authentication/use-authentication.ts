// // Dependencies
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { ref, set } from "firebase/database";
// import { toast } from "react-toastify";

// // Service
// import { auth, dataBase } from "../../services/firebase/config";

// export const UseAuthentication = () => {
//   const createUser = async (userData: any) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         userData.email,
//         userData.password
//       );

//       const user = userCredential.user;

//       if (!!user) {
//         await set(ref(dataBase, `users/${user.uid}`), {
//           nome: userData.name,
//           email: userData.email,
//           celular: userData.phone,
//           termosDeUso: userData.acceptedTerms,
//         });
//         toast.success(
//           `${userData.name}, seu cadastro foi realizado com sucesso!`
//         );
//       }
//     } catch (error: any) {
//       toast.error(`Erro ao criar usuário: ${error.code} - ${error.message}`);
//     }
//   };

//   const loginUser = async (email: string, password: string) => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );

//       const user = userCredential.user;

//       if (!!user) {
//         toast.success(`Bem-vindo de volta!`);

//         return true;
//       }

//       return false;
//     } catch (error: any) {
//       toast.error(`Erro ao fazer login: ${error.code} - ${error.message}`);

//       return false;
//     }
//   };

//   return {
//     createUser,
//     loginUser,
//   };
// };
