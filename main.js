function Collaborator(name, artistName, style, role, fee) {
    this.name = name;
    this.artistName = artistName;
    this.style = style;
    let _role = role
    let _fee = fee;

    this.getRole = function() {
        return _role;
    }

    this.setRole = function(value) {
        if (typeof value === 'string') {
            _role = value;
        }
    }
    
    this.getFee = function() {
        return _fee;
    }

    this.setFee = function(value) {
        if (typeof value === 'number') {
            _fee = value;
        }
    }
}

function HeadlinerDj(name, artistName, style) {
    Collaborator.call(this, name, artistName, style, 'Headliner', 10000);
}

function LineupDj(name, artistName, style) {
    Collaborator.call(this, name, artistName, style, 'Lineup', 3000);
}

function VisualArtist(name, artistName) {
    Collaborator.call(this, name, artistName, 'Visual Arts', 'Visuals', 5000);
}

function giveSpace() {
    console.log('-------------------')
}


const headlinerDj01 = new HeadlinerDj('Humberto','Histereogenik', 'darkprog');
const lineupDj01 = new LineupDj('Hudson', 'Aiwass', 'darkpsy');
const visualArtist01 = new VisualArtist('Thomas', 'Infandos Nox');

giveSpace()
console.log(headlinerDj01.artistName);
console.log(headlinerDj01.getRole());
console.log('$', headlinerDj01.getFee());
giveSpace()
console.log(lineupDj01.artistName);
console.log(lineupDj01.getRole());
console.log('$', lineupDj01.getFee());
giveSpace()
console.log(visualArtist01.artistName);
console.log(visualArtist01.getRole());
console.log('$', visualArtist01.getFee());
giveSpace()