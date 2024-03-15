import { getImageUrl } from '@/utils/utils';
import { getImageUrlV2 } from '@/utils/utils';

interface Person{
    name: string;
    imageId: string;
}

interface AvatarProps {
    person: Person;
    size: string;
}

interface MyProfileProps{
    persons: Person;
    profnumber: string;
    profession: string;
    achievement: string;
    invention: string;
}

function MyAvatar({ person, size }: AvatarProps) {
  const imageSizeVariant = getImageSizeVariant(Number(size));
  return (
    <img
      className="avatar"
      src={getImageUrl(person.imageId, imageSizeVariant)}
      alt={person.name}
    />
  );
}

function getImageSizeVariant(size: number): 's' | 'b' {
    return size < 90 ? 's' : 'b';
  }

export default function MyProfile({persons, profnumber, profession, achievement, invention}: MyProfileProps ) {
  return (
    <div>
      <section className="profile">
        <h2>{persons.name}</h2>
        <MyAvatar
            size={'90'}
            person={{ 
                name: persons.name, 
                imageId: persons.imageId
            }}
        />
        <ul>
          <li>
            <b>Profesi: </b> 
            {profession}
          </li>
          <li>
            <b>Penghargaan: {profnumber} </b> 
            ({achievement})
          </li>
          <li>
            <b>Telah Menemukan: </b>
            {invention }
          </li>
        </ul>
      </section>
    </div>
  );
}