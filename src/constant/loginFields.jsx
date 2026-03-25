// Giriş Formu Alanları
import { LockOutlined, MailOutlined } from "@ant-design/icons"; 
const loginFields = [
  {
    name: "email",
    label: "E-posta",
    type: "email",
    placeholder: "ornek@email.com",
    icon: <MailOutlined />,
  },
  {
    name: "password",
    label: "Şifre",
    type: "password",
    placeholder: "••••••••",
    icon: <LockOutlined />,
  },
];
export default loginFields;