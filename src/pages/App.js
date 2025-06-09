import { useState } from 'react';
import gitLogo from '../assets/githublogo.svg'
import { Container } from './styles';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo'
import { api } from '../services/api'

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

const handleSearchRepo = async () => {
  try {
    const { data } = await api.get(`/repos/${currentRepo}`);
    
    if (data.id) {
      const isExist = repos.find(repo => repo.id === data.id);
      
      if (!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return;
      }
    }
  } catch (error) {
    console.error("Erro ao buscar repositório:", error);
    alert("Repositório não encontrado ou já adicionado. Verifique o nome e tente novamente.");
  }
};

const handleRemoveRepo = (id) => {
  setRepos((prev) => prev.filter(repo => repo.id !== id));
};

  return (
    <Container>
      <img src={ gitLogo } width={72} height={72} alt="Descrição da imagem"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  );
}

export default App;
