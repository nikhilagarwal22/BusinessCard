const ProfileHeader = ({ image, name, title, locate, part, comp }) => {
    return (
        <div className="card-header-profile">
            <img className="profile-photo" src={image} alt="profile" />
            <h1>{name}</h1>
            <p><b>{title}</b></p>
            <p align="center">{locate}</p>
            <p><b>{part}</b></p>
            <p align="center">{comp}</p>
        </div>
    );
}

export default ProfileHeader;