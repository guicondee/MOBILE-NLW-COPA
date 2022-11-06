import { useContext } from "react";

import { AuthContext, AuthContextDataProps } from '../contexts/AuthContex'

export function useAuth():  AuthContextDataProps {
  const context = useContext(AuthContext)

  return context
}