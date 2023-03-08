import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Video() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const season = searchParams.get("season");
  const episode = searchParams.get("episode");

  useEffect(() => {
    if (!season || !episode) {
      navigate("/");
    }
  }, []);

  return season && episode ? (
    <video
      width={500}
      src={`${process.env.REACT_APP_BASE_URL}/video?season=${season}&episode=${episode}`}
      controls
    ></video>
  ) : null;
}

export default Video;
