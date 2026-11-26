import {useEffect, useState} from 'react';
import {useLocation} from 'react-router';
import {MessageCircle, Phone} from 'lucide-react';
import {phone, tel, whatsapp} from '../data';

export function ContactActions({floating = false, hidden = false}: {floating?: boolean; hidden?: boolean}) {
  return <div className={`contact-actions${floating ? ' floating-contact' : ''}`} aria-label="Hızlı iletişim" hidden={hidden}>
    <a className="contact-call" href={tel} aria-label={`Hemen ara: ${phone}`}><Phone size={23}/><span>Hemen ara</span></a>
    <a className="contact-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp ile iletişim"><MessageCircle size={23}/><span>WhatsApp</span></a>
  </div>;
}

export function FloatingContactActions() {
  const {pathname} = useLocation();
  const [visibility, setVisibility] = useState({pathname: '', heroVisible: true});

  useEffect(() => {
    const hero = document.querySelector('.hero, .page-heading');
    if (!hero) {
      setVisibility({pathname, heroVisible: false});
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setVisibility({pathname, heroVisible: entry.isIntersecting});
    }, {threshold: 0});
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  // Start hidden during rendering and route changes to avoid a duplicate CTA flash.
  const hidden = visibility.pathname !== pathname || visibility.heroVisible;
  return <ContactActions floating hidden={hidden}/>;
}
