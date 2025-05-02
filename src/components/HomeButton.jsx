import { Link } from 'react-router-dom';

const HomeButton = () => {
  return (
    <Link to="/">
      <button className="px-4 mx-10 py-2 my-20 bg-blue-600 text-white rounded hover:bg-blue-700">
        Go to HOME
      </button>
    </Link>
  );
};

export default HomeButton;
