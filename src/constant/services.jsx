import { Laugh } from "lucide-react";
import { Truck } from "lucide-react"; // en yakın alternatif
import { Building2 } from "lucide-react";





const services = [
  {
    name: "Acil servis takibi",
    icon: <Truck />,
    description: "40 km² alanda tüm acil servislerin anlık doluluk durumu, mesafe ve trafik optimizasyonu",
  },
  {
    name: "Akıllı Randevu",
    icon: <Laugh />,
    description: "Poliklinik kapasite, doktor uzmanlık, mesafe ve trafik bazlı optimize randevu sistemi",
  },
  {
    name: "Öncelik Sistemi",
    icon: <Building2 />,
    description: "Kronik hastalar, 65+ yaş, engelliler ve doktor önceliğine göre akıllı sıralama",
  },
];
export default services;
