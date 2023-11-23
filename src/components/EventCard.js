import Image from "next/image";
import Link from "next/link";

function EventCard({ url = "", title = "", description = "", imageSrc = "" }) {
  return (
    <Link href={url}>
      <div>
        <Image src={imageSrc} alt={title} width="350px" height="200px" />
        <h4>{title}</h4>
        {description ? <p>{description}</p> : null}
      </div>
    </Link>
  );
}

export default EventCard;
