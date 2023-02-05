import React from 'react';
import { heroService } from '../../services/HeroServices';
import { HeroInfoCard } from './HeroInfoCard/HeroInfoCard';
import { Container, Button } from 'react-bootstrap';
import { comicsService } from '../../services/ComicsServices';
// import { Comics } from './Comics/Comics';
import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';
import GoBackButton from '../backButton/Button';

class InfoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroInfo: [],
            comics: [],
            showComics: false,
            modalIsOpen: false,
            comicDetails: {},
            isFullImage: false,
            isLoading: true
        }
    }

    componentDidMount() {
        heroService.getSingleCharacter(this.props.match.params.id)
            .then(heroInfo => this.setState({ heroInfo }))
        comicsService.getComics(this.props.match.params.id)
            .then(comics => this.setState({ comics }))
            .finally(() => this.setState({ isLoading: false }))
    }

    openModal = (comicDetails = {}) => {
        this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen, comicDetails }))
    }

    showOrHideComics = () => {
        this.setState(prevState => ({ showComics: !prevState.showComics }))
    }

    showFullImage = () => {
        this.setState(prevState => ({ isFullImage: !prevState.isFullImage }))
    }

    render() {
        return (
            <>
                <Header />
                <GoBackButton history={this.props.history} />
                {this.state.isLoading
                    ? <Loader />
                    : <Container fluid>
                        <Container>
                            <HeroInfoCard heroInfo={this.state.heroInfo}
                                showFullImage={this.showFullImage}
                                isFullImage={this.state.isFullImage} />



                        </Container>
                    </Container>

                }

            </>
        )
    }



}

export { InfoPage };