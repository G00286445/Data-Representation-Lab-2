import React from 'react';

class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = {Title: ' ',
                  Year: ' '};

    this.handleChangedMovieTitle = this.handleChangedMovieTitle.bind(this);
    this.handleChangedMovieYear = this.handleChangedMovieYear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangedMovieTitle(e){
    this.setState({Title: e.target.value});
  }

  handleChangedMovieYear(e){
    this.setState({Year: e.target.value});
  }

  handleSubmit(e){
    alert(' A submission was made: ' + " " + this.state.Year);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Hello from Create component</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'></div>
          <div className='form-group'></div>
          <div className='form-group'></div>
            <label>
              Movie Poster Url:
            </label>
            <textarea
            rows='3'
            className='form-control'
            value = {this.state.Poster}
            onChange = {this.handleChangedMoviePoster}>
            </textarea>
            </form>
      </div>

      <div className='form-group'>
        <label>
          Movie Year:
        </label>
        <input
        type="text"
        className='form-control'
        value = {this.state.year}
        onChange={this.handleChangedMovieTitle}
        >
        </input>
      </div>
    );
  }
}

export default Create;