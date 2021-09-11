export function validate(input) {
    let errors = {}
    if (!input.score) {
      errors.score = 'a score is required'
    } else if (/^[0-100]$/.test(input.score)) {
      errors.score = 'You only have to enter numbers from 0 to 100'
    };
    if (!input.title) {
      errors.title = 'Title is required'
    };
    if (!input.summary) {
      errors.summary = 'Summary is required'
    };
    if (!input.healthyness) {
      errors.healthyness = 'Healthyness is required'
      } else if(/^[0-100]$/.test(input.healthyness)) {
        errors.healthyness= 'You only have to enter numbers from 0 to 100'
      }
    if (!input.steps) {
      errors.steps = 'Steps is required'
    }
    if(!input.diets){
        errors.diets = 'Diets is required'
    }
    return errors
  }