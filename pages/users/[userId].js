import { useRouter } from 'next/router';

export default function Users() {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {userId}</p>
    </div>
  );
};
