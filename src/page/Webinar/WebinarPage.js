import React, { useState, useEffect } from "react";
import datawebiner from "../../utils/data.json";
import Card from "../../components/Card/Card";
import { AiOutlineClose, AiOutlineCheckCircle } from "react-icons/ai";
import "./WebinarPage.css";

function WebinarPage() {
  const [data, setData] = useState(null);
  const [selectedWebinar, setSelectedWebinar] = useState([]);

  // console.log(data);

  useEffect(() => {
    setData(datawebiner);
  }, []);

  const handleWebinarSelect = (element) => {
    setSelectedWebinar(element);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="webinarlar-page">
      <div className="container_all">
        <div className="row">
          <div className=" col-md-3 col-sm-6">
            <div className="content">
              <div className="content_title">
                <p>{data.suggestions[3].name} </p>
                <AiOutlineClose />
              </div>

              {data.sections.map((section) =>
                section.elements.map((element) => (
                  <div
                    className={` element ${
                      element === selectedWebinar ? "selected" : ""
                    }`}
                  >
                    <div className="element_icon">
                      <AiOutlineCheckCircle size={16} />
                    </div>

                    <p
                      key={element.id}
                      onClick={() => {
                        handleWebinarSelect(element);
                      }}
                      className="element_title"
                    >
                      {element.name}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="col-md-9 col-sm-6 ">
            <div className="video_content">
              {selectedWebinar && (
                <div>
                  <iframe
                    title={selectedWebinar.name}
                    // src={`https://player.vimeo.com/video/${selectedWebinar.url}`}
                    src={`https://player.vimeo.com/video/874107330`}
                    width="580"
                    height="300"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
            <div className="suggestions_content">
              <div className="suggestions">
                <h6 className="suggestions_title">Sizin için öneriler</h6>

                <div className="row">
                  {data.suggestions.map((suggestion) => (
                    <div className="col-md-4 col-sm-6" key={suggestion.id}>
                      <Card suggestion={suggestion} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebinarPage;
