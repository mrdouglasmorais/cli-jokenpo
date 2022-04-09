const MachineOptions = require('./machine');
const inquirer = require('inquirer');
const options = require('../data/index');
const gameBy = require('../data/gameby');

class User extends MachineOptions {
  constructor({opt, name, selected}){
    super({opt});
    this._name = name;
    this._selected = selected;
    this._sort = this.sort();
  }

  set name(string){
    this._name = string;
  }

  set selected(string){
    this._selected = string;
  }

  get name(){
    return this._name;
  }

  get selected(){
    return this._selected;
  }

  logic(){
    if(this._selected === this._sort){
      return `${this._name} escolheu ${this._selected} e a máquina escolheu ${this._sort} -> você EMPATOU!!!`;
    } else if (
      (this._selected === 'Pedra' && this._sort === 'Tesoura') ||
      (this._selected === 'Papel' && this._sort === 'Pedra') ||
      (this._selected === 'Tesoura' && this._sort === 'Papel')
    ) {
      return `${this._name} escolheu ${this._selected} e a máquina escolheu ${this._sort} -> você GANHOU!!!`;
    }
    else {
      return `${this._name} escolheu ${this._selected} e a máquina escolheu ${this._sort} -> você PERDEU!!!`;
    }
  };

  game(){
    console.info(gameBy)
    return inquirer.prompt([
      {
        name: 'name',
        message: 'Qual o seu nome?',
        default: 'Jogador'
      },
      {
        type: 'list',
        name: 'jokenpo',
        message: 'Selecione umas desta opções',
        choices: options
      }
    ]).then( (answers) => {
      this._name = answers.name
      this._selected = answers.selected
      console.info(`${this.logic()}`)
    })
  };
}

module.exports = User;