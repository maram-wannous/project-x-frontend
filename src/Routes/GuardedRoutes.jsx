/* eslint-disable react/prop-types */
export default function GuardedRoutes({ isAccessable, OnSucess, OnFaild }) {
    return isAccessable ? <OnSucess /> : <OnFaild />;
  }