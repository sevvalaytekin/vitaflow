import React, { useState } from 'react';
import { Form, Input, Button, Segmented, Select, Checkbox, ConfigProvider } from 'antd';
import "./Form.css";
import registerFields from '../../../constant/registerFields.jsx';
import loginFields from '../../../constant/loginFields.jsx';

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState('Giriş Yap');

  

  const currentFields = activeTab === 'Giriş Yap' ? loginFields : registerFields;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2563eb', // Link ve focus renkleri
          borderRadius: 10,
        },
      }}
    >
      <div style={{
        backgroundColor: '#ffffff', padding: '40px', borderRadius: '24px',
        width: '100%', maxWidth: '480px', margin: '0 auto',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', fontFamily: 'sans-serif'
      }}>
        
        {/* Segmented ile Kaydırmalı Tab Yapısı */}
        <Segmented
          block
          size="large"
          value={activeTab}
          onChange={setActiveTab}
          options={['Giriş Yap', 'Kayıt Ol']}
          style={{ marginBottom: 30, padding: '4px', borderRadius: '30px', backgroundColor: '#f3f4f6' }}
        />

        <Form layout="vertical" requiredMark={false}>
          {currentFields.map((field, index) => (
            <Form.Item 
              key={index} 
              label={<span style={{ fontWeight: 600, fontSize: '13px' }}>{field.label}</span>}
              name={field.name}
            >
              {field.type === 'select' ? (
                <Select 
                  placeholder="Öncelik durumunuzu seçin" 
                  size="large"
                  variant="filled"
                  style={{ backgroundColor: '#f3f4f6', borderRadius: '10px' }}
                  options={[
                    { value: '65', label: '65+ Yaş' },
                    { value: 'kronik', label: 'Kronik Hasta' },
                    { value: 'engelli', label: 'Engelli' },
                    { value: 'yok', label: 'Yok' },
                  ]}
                />
              ) : field.type === 'password' ? (
                <Input.Password 
                  prefix={field.icon} 
                  placeholder={field.placeholder} 
                  size="large" 
                  variant="filled"
                  style={{ backgroundColor: '#f3f4f6' }}
                />
              ) : (
                <Input 
                  prefix={field.icon} 
                  placeholder={field.placeholder} 
                  size="large" 
                  variant="filled"
                  style={{ backgroundColor: '#f3f4f6' }}
                />
              )}

              {/* Giriş Yap modunda Şifre alanının altına Linkleri ekle */}
              {activeTab === 'Giriş Yap' && field.name === 'password' && (
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
                  <Checkbox><span style={{ color: '#6b7280', fontSize: '12px' }}>Beni hatırla</span></Checkbox>
                  <Button type="link" size="small" style={{ fontSize: '12px', padding: 0 }}>Şifremi unuttum</Button>
                </div>
              )}
            </Form.Item>
          ))}

          {/* Kayıt Ol modunda KVKK */}
          {activeTab === 'Kayıt Ol' && (
            <Form.Item name="kvkk" valuePropName="checked">
              <Checkbox style={{ fontSize: '12px' }}>
                <span style={{ color: '#2563eb' }}>KVKK</span> ve <span style={{ color: '#2563eb' }}>Kullanım Şartları</span>'nı kabul ediyorum
              </Checkbox>
            </Form.Item>
          )}

          <Form.Item>
            <Button 
              type="primary" 
              block 
              size="large" 
              style={{ backgroundColor: '#000', borderColor: '#000', height: '48px', fontWeight: 'bold', marginTop: '10px' }}
            >
              {activeTab}
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: 'center', color: '#d1d5db', fontSize: '11px', marginTop: '20px' }}>
          © 2026 VitaFlow. Tüm hakları saklıdır.
        </div>
      </div>
    </ConfigProvider>
  );
};

export default AuthForm;
