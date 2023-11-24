interface HeadlineProps {
  title: string;
  center?: boolean;
}

const Headline: React.FC<HeadlineProps> = ({ title, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <h1 className="font-bold text-2xl">{title}</h1>
    </div>
  );
};

export default Headline;
