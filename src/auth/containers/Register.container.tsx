// src/auth/containers/Register.container.tsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { RegisterComponent } from "../components/Register.component";

export interface RegisterContainerProps {
  onNavigateToLogin: () => void;
}

const RegisterContainer: React.FC<RegisterContainerProps> = ({
  onNavigateToLogin,
}) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date());
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { signUp } = useAuth();

  const handleRegister = async (): Promise<void> => {
    if (!firstName || !lastName || !email || !password) {
      alert("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    try {
      // Combine first and last name for displayName
      const displayName = `${firstName} ${lastName}`;

      // Call the signUp method from AuthContext
      await signUp(email, password, displayName);

      // After successful registration, you may want to:
      // 1. Store additional user data in Firestore (phone, date of birth)
      // 2. Navigate to a welcome screen or straight to the main app

      // For now, we'll just log a message and navigate back to login
      console.log("User registered successfully");
      onNavigateToLogin();
    } catch (error: any) {
      console.error("Registration error", error);
      alert(error.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RegisterComponent
      firstName={firstName}
      lastName={lastName}
      email={email}
      dateOfBirth={dateOfBirth}
      phoneNumber={phoneNumber}
      password={password}
      showPassword={showPassword}
      showDatePicker={showDatePicker}
      isLoading={isLoading}
      setFirstName={setFirstName}
      setLastName={setLastName}
      setEmail={setEmail}
      setDateOfBirth={setDateOfBirth}
      setPhoneNumber={setPhoneNumber}
      setPassword={setPassword}
      setShowPassword={setShowPassword}
      setShowDatePicker={setShowDatePicker}
      handleRegister={handleRegister}
      onNavigateToLogin={onNavigateToLogin}
    />
  );
};

export default RegisterContainer;
