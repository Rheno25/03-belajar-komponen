import { getImageUrl } from '@/utils/utils'
import MyProfile from './myprofile';

export default function MyGallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
        <MyProfile
            persons={{
                name: 'Maria Skłodowska-Curie',
                imageId: 'szV5sdG'
            }}
            profnumber='4'
            profession='Fisikawan dan kimiawan'
            achievement='Penghargaan Nobel Fisika, Penghargaan Nobel Kimia, Medali Davy, Medali Matteucci'
            invention='polonium (unsur kimia)'
            >
        </MyProfile>
        <MyProfile
            persons={{
                name: 'Katsuko Saruhashi',
                imageId: 'YfeOqp2'
            }}
            profnumber='2'
            profession='Ahli Geokimia'
            achievement='Penghargaan Miyake Geokimia, Penghargaan Tanaka'
            invention='sebuah metode untuk mengukur karbon dioksida pada air laut'
        >
        </MyProfile>
    </div>
  );
}