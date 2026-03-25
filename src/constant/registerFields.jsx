// Kayıt Formu Alanları
import { IdcardOutlined, LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
  const registerFields = [
    { name: 'fullname', label: 'Ad Soyad', type: 'text', placeholder: 'Ahmet Yılmaz', icon: <UserOutlined /> },
    { name: 'tc', label: 'TC Kimlik No', type: 'text', placeholder: '12345678901', icon: <IdcardOutlined /> },
    { name: 'email', label: 'E-posta', type: 'email', placeholder: 'ornek@email.com', icon: <MailOutlined /> },
    { name: 'phone', label: 'Telefon', type: 'tel', placeholder: '+90 555 123 4567', icon: <PhoneOutlined /> },
    { name: 'priority', label: 'Öncelik Durumu', type: 'select' },
    { name: 'password', label: 'Şifre', type: 'password', placeholder: '••••••••', icon: <LockOutlined /> },
    { name: 'passwordConfirm', label: 'Şifre Tekrar', type: 'password', placeholder: '••••••••', icon: <LockOutlined /> },
  ];

  export default registerFields;