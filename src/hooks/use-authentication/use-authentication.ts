// Dependencies
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { toast } from "react-toastify";

// Service
import { auth } from "../../services/firebase/config";

export const UseAuthentication = () => {
  const db = getDatabase();

  const createUser = async (userData: any) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      const user = userCredential.user;

      if (!!user) {
        await set(ref(db, `users/${user.uid}`), {
          nome: userData.name,
          email: userData.email,
          celular: userData.phone,
          termosDeUso: userData.termsAccepted ?? false,
        });
        toast.success(`Usuário ${userData.name} criado com sucesso!`);
      }
    } catch (error: any) {
      toast.error(`Erro ao criar usuário: ${error.code} - ${error.message}`);
    }
  };

  return {
    createUser,
  };
};
