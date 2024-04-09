import "./page-container.css";
import PropTypes from "prop-types";

export default function PageContainer(props) {
  return <div className="pageContainer-comp">{props.children}</div>;
}

PageContainer.propTypes = {
  children: PropTypes.node,
};
