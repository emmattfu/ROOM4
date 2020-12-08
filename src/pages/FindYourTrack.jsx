import React, {useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { findTracks } from "../redux/actions";
import "../styles/findYourTrack.css";

const FindYourTrack = () => {
  const [submittedData, setSubmittedData] = useState({});
  const dispatch = useDispatch();
  const { register, handleSubmit, reset,  formState: { isSubmitSuccessful } } = useForm();
  const foundedTracks = useSelector(state => state.foundedTracks)

  useEffect(() => {
    if (isSubmitSuccessful) {
        reset({ ...submittedData });
      }
  }, [reset, isSubmitSuccessful, submittedData])

  return (
    <div className="find-track" >
      <div className="find-track__form-block">
        <form
          className="find-track__form"
          onSubmit={handleSubmit((formData) => {
            setSubmittedData(formData.track)
            dispatch(findTracks(formData.track));

          })}
        >
          <div className="find-track__input">
            <label htmlFor="track">Lets find some music</label>
            <input type="text" name="track" id="track" ref={register({required: "required"})} />
          </div>
          <div>
            <button className="find-track__button" type="submit">
              Find it Now
            </button>
          </div>
        </form>
      </div>

      <div className="find-track__tracks-block">
          {foundedTracks.length ? foundedTracks.map((track, index) => {
              return (
                  <div key={`${track.mbid}${index}`}>
                      <span className="track-block__artist">{track.artist}</span>
                      <span> - </span>
                      <span>{track.name}</span>
                  </div>
              )
          }) : <h1 style={{textAlign: "center"}}>Here will be your tracks</h1>}
      </div>
    </div>
  );
};

export default FindYourTrack;
