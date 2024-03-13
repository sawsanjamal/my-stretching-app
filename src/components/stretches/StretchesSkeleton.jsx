import Skeleton from "react-loading-skeleton";

export function StretchesSkeleton() {
  return (
    <>
      <div className="stretches-example-container">
        <div className="stretch-example">
          <div className="stretch-header-container">
            <h1>
              <Skeleton width={600} />
            </h1>
          </div>
          <div className="video-container">
            <Skeleton height={400} width={600} />
            <Skeleton height={400} width={600} />
          </div>
          <ul className="stretch-steps">
            <li className="stretch-step">
              <Skeleton height={30} width={800} />
            </li>
            <li className="stretch-step">
              <Skeleton height={30} width={800} />
            </li>
            <li className="stretch-step">
              <Skeleton height={30} width={800} />
            </li>
          </ul>
        </div>
        <div className="stretch-example">
          <div className="stretch-header-container">
            <h1>
              <Skeleton width={600} />
            </h1>
          </div>
          <div className="video-container">
            <Skeleton height={400} width={600} />
            <Skeleton height={400} width={600} />
          </div>
          <div className="stretch-steps">
            <ul className="stretch-steps">
              <li className="stretch-step">
                <Skeleton height={30} width={800} />
              </li>
              <li className="stretch-step">
                <Skeleton height={30} width={800} />
              </li>
              <li className="stretch-step">
                <Skeleton height={30} width={800} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
