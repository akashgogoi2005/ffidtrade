import './upload.css'
import React from 'react'


const ImgUpload = ({
  onChange,
  src
}) =>
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload" >
      <img for="photo-upload" src={src} alt='profileimg' className='profile'/>
    </div>
    <input className='uinput' id="photo-upload" type="file" onChange={onChange} />
  </label>


const Name = ({
  onChange,
  value
}) =>
  <div className="field">
    <label htmlFor="name">
      name:
    </label>
    <input
      className='uinput'
      id="name"
      type="text"
      onChange={onChange}
      maxlength="25"
      value={value}
      placeholder="Alexa"
      required />
  </div>


const Status = ({
  onChange,
  value
}) =>
  <div className="field">
    <label htmlFor="status">
      status:
    </label>
    <input
      className='uinput'
      id="status"
      type="text"
      onChange={onChange}
      maxLength="35"
      value={value}
      placeholder="It's a nice day!"
      required />
  </div>


const Profile = ({
  onSubmit,
  src,
  name,
  status,
}) =>
  <div className="cardon">
    <form onSubmit={onSubmit}>
      <h1>Player's Profile</h1>
      <label className="custom-file-upload fas">
        <div className="img-wrap" >
          <img for="photo-upload" src={src} alt='profileimg2' className='profile'/>
        </div>
      </label>
      <div className="name">{name}</div>
      <div className="status">{status}</div>
      <button type="submit" className="edit onlybtn">Edit Profile </button>
    </form>
  </div>


const Edit = ({
  onSubmit,
  children,
}) =>
  <div className="cardon">
    <form onSubmit={onSubmit}>
      <h1>Create Your Profile</h1>
      {children}
      <button type="submit" className="save onlybtn">Save </button>
    </form>
  </div>

class CardProfile extends React.Component {
  state = {
    file: '',
    // imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
    imagePreviewUrl: './icon.png',
    name: '',
    status: '',
    active: 'edit'
  }

  photoUpload = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  }
  editName = e => {
    const name = e.target.value;
    this.setState({
      name,
    });
  }

  editStatus = e => {
    const status = e.target.value;
    this.setState({
      status,
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
    this.setState({
      active: activeP,
    })
  }

  render() {
    const { imagePreviewUrl,
      name,
      status,
      active } = this.state;
    return (
      <div>
        {(active === 'edit') ? (
          <Edit onSubmit={this.handleSubmit}>
            <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
            <Name onChange={this.editName} value={name} />
            <Status onChange={this.editStatus} value={status} />
          </Edit>
        ) : (
          <Profile
            onSubmit={this.handleSubmit}
            src={imagePreviewUrl}
            name={name}
            status={status} />)}

      </div>
    )
  }
}

// ReactDOM.render(
//   <CardProfile/>,
//   document.getElementById('root')
// )


export default CardProfile