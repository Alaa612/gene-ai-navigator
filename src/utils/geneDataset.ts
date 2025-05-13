
// Utility to generate synthetic gene expression dataset

// Common gene names for the dataset
const geneNames = [
  'BRCA1', 'TP53', 'EGFR', 'PTEN', 'APC', 'KRAS', 'BRAF', 'MYC', 'ERBB2', 'PIK3CA',
  'VEGFA', 'TERT', 'CCND1', 'CDK4', 'RB1', 'MDM2', 'CDKN2A', 'ESR1', 'AR', 'MTOR',
  'ALK', 'CD274', 'NRAS', 'CTNNB1', 'PARP1', 'NOTCH1', 'JAK2', 'STAT3', 'BCL2', 'MCL1',
  'ATM', 'BRCA2', 'MLH1', 'MSH2', 'MSH6', 'PMS2', 'EPCAM', 'APC', 'CDH1', 'SMAD4',
  'FGFR1', 'FGFR2', 'FGFR3', 'IGF1R', 'KIT', 'MET', 'PDGFRA', 'RET', 'ROS1', 'IDH1',
  'IDH2', 'DNMT3A', 'TET2', 'ASXL1', 'EZH2', 'KMT2A', 'NPM1', 'FLT3', 'KIT', 'CEBPA'
];

// Generate a random integer between min and max (inclusive)
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate random float between min and max with specified decimal places
function getRandomFloat(min: number, max: number, decimals: number = 2): number {
  const value = Math.random() * (max - min) + min;
  return parseFloat(value.toFixed(decimals));
}

// Get a random chromosome (1-22, X, Y)
function getRandomChromosome(): string {
  const choices = [...Array(22).keys()].map(i => (i + 1).toString()).concat(['X', 'Y']);
  return choices[Math.floor(Math.random() * choices.length)];
}

// Generate the synthetic dataset
export function generateGeneExpressionDataset(count: number = 1000): string {
  // Ensure approximately 30% are disease associated
  const diseaseCount = Math.floor(count * 0.3);
  
  // Column headers
  let csv = "Gene_ID,Gene_Name,Expression_Level,Mutation_Count,GC_Content,Chromosome,Is_Disease_Associated\n";
  
  for (let i = 0; i < count; i++) {
    const geneId = `GENE${String(i + 1).padStart(4, '0')}`;
    
    // Randomly select a gene name or generate a synthetic one if we run out
    let geneName;
    if (i < geneNames.length) {
      geneName = geneNames[i];
    } else {
      // For additional genes beyond our predefined list, create synthetic names
      const prefix = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      geneName = `${prefix[getRandomInt(0, prefix.length - 1)]}${prefix[getRandomInt(0, prefix.length - 1)]}${getRandomInt(1, 999)}`;
    }
    
    const expressionLevel = getRandomFloat(0.01, 15.0, 2);
    const mutationCount = getRandomInt(0, 10);
    const gcContent = getRandomFloat(0.3, 0.8, 2);
    const chromosome = getRandomChromosome();
    
    // Ensure approximately 30% are disease associated
    let isDiseaseAssociated;
    if (i < diseaseCount) {
      isDiseaseAssociated = 1;
    } else {
      isDiseaseAssociated = 0;
    }
    
    // Shuffle to ensure random distribution of disease association
    if (Math.random() > 0.5 && i > 0 && i < count - 1) {
      const temp = isDiseaseAssociated;
      isDiseaseAssociated = i % 2 === 0 ? 1 : 0;
    }
    
    csv += `${geneId},${geneName},${expressionLevel},${mutationCount},${gcContent},${chromosome},${isDiseaseAssociated}\n`;
  }
  
  return csv;
}

// Function to download the generated dataset
export function downloadGeneDataset(count: number = 1000): void {
  const csv = generateGeneExpressionDataset(count);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'gene_expression_dataset.csv');
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
