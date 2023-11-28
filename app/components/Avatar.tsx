import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  if (src) {
    return (
      <Image
        height="30"
        width="30"
        className="rounded-full"
        src={src}
        alt="Avatar"
      />
    );
  }

  return <FaUserAlt size={16} />;
};

export default Avatar;
