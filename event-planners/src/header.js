import './App.css';

function Header(){
    return(
        
<header className="App-header">

<ul class="nav">
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Events</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Services</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Create-Event</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Login</a>
    </li>
</ul>

</header>
    )
}

export default Header;