import { IconBrandTwitterFilled, IconBrandGithubFilled, IconBrandYoutubeFilled } from '@tabler/icons-react';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <span className="title">CV Generator</span>
      <IconBrandTwitterFilled />
      <IconBrandGithubFilled />
      <IconBrandYoutubeFilled />
    </div>
  );
}
