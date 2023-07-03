import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { SeacrhIcon } from "./icon";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "./Popper";
import SearchItem from "./SearchItem/SearchItem";

const searchItemlist = [
  "nghe như tình yêu mck",
  "so rang anh biet em con yeu anh",
  "sofm",
  "mixigaming",
  "reactjs",
  "thang tu la loi noi doi cua em karaoke",
  "nhism",
  "truoc khi em ton tai",
  "chi khi anh mot minh dat g",
  "2h mck",
];

function HeaderSearch() {
  const [showResult, setShowResult] = useState(false);

  const seacrhTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Tìm Kiếm
    </Tooltip>
  );

  const voiceTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Tìm kiếm bằng giọng nói
    </Tooltip>
  );
  const handleHideResult = () => {
    setShowResult(false);
  };
  return (
    <div className="header-search">
      <Tippy
        interactive
        visible={showResult}
        render={(attrs) => (
          <div className="search-result" tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <div className="pt-3">
                <ul className="SearchItem">
                  {searchItemlist.map((item, index) => {
                    return <SearchItem item={item} key={index} />;
                  })}
                </ul>
              </div>
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <input
          onFocus={() => setShowResult(true)}
          spellCheck={false}
          placeholder="Tìm kiếm"
          className="header-input-search"
        ></input>
      </Tippy>

      <OverlayTrigger placement="bottom" overlay={seacrhTooltip}>
        <button className="header-btn-search">
          <SeacrhIcon />
        </button>
      </OverlayTrigger>
      <OverlayTrigger placement="bottom" overlay={voiceTooltip}>
        <div>
          <FontAwesomeIcon icon={faMicrophone} className="header-btn-micro" />
        </div>
      </OverlayTrigger>
    </div>
  );
}

export default HeaderSearch;
