import { Link } from 'react-router-dom';

const NavigateButton = () => {
  return (
    <Link to="/dashboard">
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Navigate
      </button>
    </Link>
  );
};

export default NavigateButton;
