import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/callAPI';
import Map from '../../components/Map/Map';
import WithLoading from '../../utils/WithLoading';
import './Home.scss';
import { FILTER_BY_TITLE, GET_LOCATION_DATA, RESET_DATA } from '../../actions/actionTypes';
import SideCard from '../../components/SideCard';
import LeftSideCard from '../../components/LeftSideCard';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieLocation: {
        data: [],
        fetched: false,
        actualData: [],
      },
      movieTitle: '',
      movieYear: '',
      clear: true,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.movieLocation.data !== nextProps.movieLocationData.data) {
      return {
        movieLocation: nextProps.movieLocationData,
      };
    }
    return null;
  }

  componentDidMount = () => {
    const { locationDataRequest } = this.props;
    locationDataRequest(GET_LOCATION_DATA);
  }

  onDropDownChange = (value, attr) => {
    const { locationDataRequest } = this.props;
    const { movieLocation } = this.state;

    this.setState({
      [attr]: value,
      clear: false,
    });
    locationDataRequest(FILTER_BY_TITLE, value, movieLocation.actualData);
  }

  onReset = () => {
    const { locationDataRequest } = this.props;
    const { movieLocation } = this.state;
    locationDataRequest(RESET_DATA, '', movieLocation.actualData);
    this.setState({
      movieTitle: '',
      movieYear: '',
      clear: true,
    });
  }

  clear = () => {
    this.setState({
      clear: true,
    });
  }

  render() {
    const { movieLocation, movieTitle, clear } = this.state;

    const { fetched, data, actualData } = movieLocation;

    return (
      <div className="home">
        <LeftSideCard
          actualData={actualData}
          movieTitle={movieTitle}
          onReset={this.onReset}
          onDropDownChange={this.onDropDownChange}
        />
        <WithLoading fetched={fetched}>
          <Map data={data} />
        </WithLoading>
        <SideCard data={data} clear={clear} onClear={this.clear} />
      </div>);
  }
}

Home.propTypes = {
  locationDataRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  actions,
)(Home);

